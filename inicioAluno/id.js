function usuario(nombre,DNI,apellidos,usuario,contrasena,direccion, telefono, tipousuario, activo){
    this.nombre=nombre;
    this.DNI=DNI;
    this.apellidos=apellidos;
    this.usuario=usuario;
    this.contrasena=contrasena;
    this.direccion=direccion;
    this.telefono=telefono;
    this.tipousuario=tipousuario;
    this.activo=activo;

}

const mari =new usuario("Mari", "4563441D","Marta","MariMarta",5645845,"calle de las nieves, 10", 699545454, "alumno","true"); 
const luci =new usuario("Luci", "7854554A","Lopez","Lulu",787578,"calle del puerto, 01", 699545456, "alumno","true"); 
const pepe =new usuario("Pepi", "5445543G","Silva","Pepito",3654784,"calle del barquito, 01", 693564785, "alumno","true"); 

const arrayUsuario= [mari,luci,pepe];
console.log(arrayUsuario[2].nombre);


