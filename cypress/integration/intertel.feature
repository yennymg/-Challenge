Feature: login
    Background:
    #Given Entrar a la url

    #Scenario: Inicio de sesión satisfactorio
    #   When Ingresar usuario
    #  And Ingresar contraseña
    # Then Das click en el boton Entrar

    Scenario:Alta de usuarios
        Given Entrar a la url
        When Dar click en el menu opciones
        And Dar click en el sub menu usuarios
        And Dar click en el boton crear nuevo
        Then Llenar el formulario con los datos necesarios
        And Dar click en el boton guardar
        And Verificar que exista el usuario


    Scenario: Cambios de usuario
        Given Entrar a la url
        When Dar click en el menu opciones
        And Dar click en el sub menu usuarios
        And Dar click en el boton editar
        Then Modificar datos
        And Dar click en el boton guardar


    Scenario: Baja de usuario
        Given Entrar a la url
        When Dar click en el menu opciones
        And Dar click en el sub menu usuarios
        And Dar click en el boton Eliminar
        Then Validar que se quiere eliminar
        And Verificar que no exista el usuario


    Scenario: Inicio de sesión erroneo
        When Ingresar usuario
        And Ingresar contraseña
        Then Das click en el boton Entrar
        And Visualizar mensaje de usuario no registrado



    Scenario: Validacion de indicadores generales
        Given Entrar a la url
        When Verifica que la candidad de llamadas totales es igual a "22941"
        And Verifica que el costo total sea de "7136.41"
        Then Verifica quienes son las personas que mas llaman
        And Verifica los lugares mas llamados

    @focus
    Scenario: Validación de listado de celulares
        Given Entrar a la url
        When Dar click en el menu opciones
        When Dar click en el sub menu lista de celulares 
        Then Validar la cantidad celulares registrados 
        
