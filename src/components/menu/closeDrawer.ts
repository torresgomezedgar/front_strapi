export const closeDrawer = (id = "my-drawer-2") => {
  // Esperar 300–500 ms antes de cerrar el drawer
  setTimeout(() => {
    const drawer = document.getElementById("my-drawer-2") as HTMLInputElement | null;
    if (drawer) drawer.checked = false;
  }, 300); // ajusta este valor según la duración de tu animación
}
