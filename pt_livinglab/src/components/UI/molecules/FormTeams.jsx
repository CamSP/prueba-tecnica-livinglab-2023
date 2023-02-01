import React, {useState, useEffect} from "react";
import * as yup from "yup"
import circleAdd from "./../../../assets/icons/circleAdd.svg"
import circleMinus from "./../../../assets/icons/circleMinus.svg"
import ButtonIco from "../atoms/ButtonIco";
import { Formik, Form, Field } from "formik"


const FormTeams = ({teamsList, buttonText, setButtonText, setteamsList, teamID, setTeamID}) => {


    // Esquema de Yup
    const emailSchema = yup.object().shape({
        // Nombre del equipo (Minimo 2 caracteres)
        teamName: yup.string()
        .min(2, 'Minimo 2 caracteres')
        .required("Nombre requerido"),
        // Lider del equipo
        leader: yup.string().required("Lider requerido"),
        // Emails del equipo
        emails: yup.array().of(yup.string().email('Email no válido')).required("Email es requerido")     
    })

    // Hook con la cantidad de emails en el formulario y c
    // con el valor incial de los campos
    const [emails, setEmails] = useState(['','']);
    // Valores iniciales de los campos del formulario
    const [initialValues, setInitialValues] = useState({
        teamName: "",
        leader: "",
        emails: ["", ""]
    })

    // Función que actualiza los valores iniciales 
    useEffect(() => {
        // Si el texto del boton es actualizar, se tomas los datos del equipo
        // y se rellenan los valores de los campos con los datos
        if(buttonText === "Actualizar"){
            let team = teamsList[teamID]   
            setEmails(team.members)
            setInitialValues({
                teamName: team.name,
                leader: team.leader,
                emails: team.members
            })
        // Si el boton cambia a Crear, se reinicia el formulario
        }else{
            setEmails(["", ""])
            setInitialValues({
                teamName: "",
                leader: "",
                emails: ["", ""]
            })
        }
      }, [teamID, buttonText, teamsList]);
    
    // Función para añadir un nuevo campo de email
    const addEmail = ()=>{
        setEmails([...emails, ""]);
    }

    // Función para eliminar un campo de email
    const removeEmail = () => {
        if(emails.length>2){
            const updatedEmails = emails;
            updatedEmails.pop()
            setEmails([...updatedEmails])
        }
    }
    
    // Función que maneja los valores del formulario al ser enviados
    const handleSubmit = (values) => {
        // Hace una copia de los valores
        let processedValues = values
        // Toma los emails necesasarios de acuerdo a la longitud del arreglo emails
        processedValues.emails.slice(emails.length)
        // Crea el objeto del equipo a añadir
        let newTeam = {
            "id": teamsList.length,
            "name": processedValues.teamName,
            "nMembers": emails.length,
            "members":processedValues.emails,
            "leader": processedValues.leader,
            "solicitude": []
        }
        
        // Si el valor del boton es Crear se añade un nuevo elemento
        if(buttonText === "Crear"){
            setteamsList([...teamsList, newTeam])
            setButtonText("Crear")
            setTeamID(undefined)
        }else{
            // Si el boton tiene el valor de actualizar, 
            // reemplaza los valores del equipo correspondiente
            newTeam.id = teamID
            let tempTeamList = teamsList
            tempTeamList[teamID] = newTeam 
            tempTeamList[teamID].solicitude = teamsList[teamID].solicitude
            setteamsList(tempTeamList)
        }
    }


    return (
        <div className="form">
            <div className="form-content" >
                {/* Inicializaciión del formulario */}
                <Formik 
                initialValues={initialValues}
                validationSchema={emailSchema}
                onSubmit={(values, {resetForm})=>{
                    handleSubmit(values)
                    resetForm();
                }}
                enableReinitialize
                >
                    {({ touched, errors, values, resetForm})=>(
                        <Form>
                            {/* Titulo de la sección del formulario */}
                            <span className="form-section-title">Nombre del equipo</span>
                            <div>
                                <Field className="inputField" type="text" name="teamName" placeholder="Type here"/>
                                {errors.teamName || touched.teamName ? <div>{errors.teamName}</div> : null}
                            </div>
                            {/* Titulo de la sección del formulario */}
                            <span className="form-section-title">Integrantes</span>
                            <br />
                            {
                                // Se mapea el arreglo de los emails, por cada valor del arreglo se añade un campo de correo
                                emails.map((email, index) => (
                                <div key={index}>
                                    <span className="inputName">Correo</span>
                                    <Field name={`emails.${index}`} key={`emails.${index}`}  type="email" className="inputField"  placeholder="Type here"/>
                                {/* Se añaden los errores de los correos */}
                                {errors.emails  && touched.emails ? <div>{errors.emails[index]}</div> : null}
                                <br />
                                </div>
                            ))}
                            <div className="addMinusSection">
                                {/* Botones para añadir o eliminar un correo */}
                                <ButtonIco icon={<img src={circleAdd} alt="addCircle"/>} onclick={addEmail}/>
                                <ButtonIco icon={<img src={circleMinus} alt="minusCircle"/>} onclick={()=>{removeEmail()}}/>
                            </div>
                            {/* Titulo de la sección del formulario */}
                            <span className="form-section-title">Lider del equipo</span>
                            
                            {/* Campo dropdown para elegir el lider del equipo */}
                            <Field as="select" className="selectField" name="leader" value={values.leader}>
                                <option value="">Elegir...</option>                                   
                                {
                                    // Se mapea el arreglo de los emails y se añade el valor 
                                    // del campo de correo como opción a elegir
                                    values.emails.map((email, index) => (
                                        email!=="" &&<option value={email} key={index}>{email}</option>
                                    ))
                                }
                            </Field>
                            {/* Aviso de error en el campo del lider */}
                            {errors.leader && touched.leader ? <div>{errors.leader}</div> : null}
                        
                            {/* Boton para hacer submit del formulario */}
                            <div className="submitSection">
                                <button  type="submit" className="submitButton"
                                >{buttonText}</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default FormTeams;