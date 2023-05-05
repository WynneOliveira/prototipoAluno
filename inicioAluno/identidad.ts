function usuario(nombre:String,DNI:string,apellidos:string,usuario:string,contrasena:number,direccion:string, telefono:number, tipousuario:string, activo:boolean){
    this.nombre=nombre;
    this.DNI=DNI;
    this.apellidos=apellidos;
    this.usuario=usuario;
    this.contrasena=contrasena;
    this.direccion=direccion;
    this.telefono=telefono;
    this.tipousuario=tipousuario;
    this.activo=activo;

};
//objetos
let  mari =new usuario("Mari", "4563441D","Marta","MariMarta",5645845,"calle de las nieves, 10", 699545454, "alumno",true); 
let luci =new usuario("Luci", "7854554A","Lopez","Lulu",787578,"calle del puerto, 01", 699545456, "alumno",true); 
let pepe =new usuario("Pepi", "5445543G","Silva","Pepito",3654784,"calle del barquito, 01", 693564785, "alumno",true); 

console.log(mari);


