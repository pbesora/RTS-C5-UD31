function selectPic(num) {
  //cambiar imagen
  f = "imagenes/foto" + num + ".jpg";
  document.images["fotoVisor"].src = f;

  //cambiar texto
  t = document.images["fotos" + num].alt;
  titulo.innerHTML = t;
}
