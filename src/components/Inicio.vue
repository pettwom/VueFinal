<template>
    <!-- navBar -->
    <div class="full-width navBar">
        <div class="full-width navBar-options">
            <i class="zmdi zmdi-more-vert btn-menu" id="btn-menu"></i>
            <div class="mdl-tooltip" for="btn-menu">Menu</div>
            <div class="navBar-options-list">
                <ul class="list-unstyle">
                    <li class="btn-exit" id="btn-exit">
                        <i class="zmdi zmdi-power"></i>
                        <div class="mdl-tooltip" for="btn-exit">Salir</div>
                    </li>
                    <li class="text-condensedLight noLink"><small>Nombre de Usuario</small></li>
                    <li class="noLink">
                        <figure>
                            <img src="assets/img/avatar-male.png" alt="Avatar" class="img-responsive" />
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- navLateral -->
    <section class="full-width navLateral">
        <div class="full-width navLateral-bg btn-menu"></div>
        <div class="full-width navLateral-body">
            <div class="full-width navLateral-body-logo text-center tittles">
                <i class="zmdi zmdi-close btn-menu"></i> App Inventory
            </div>
            <figure class="full-width" style="height: 77px">
                <div class="navLateral-body-cl">
                    <img src="assets/img/avatar-male.png" alt="Avatar" class="img-responsive" />
                </div>
                <figcaption class="navLateral-body-cr hide-on-tablet">
                    <span>
                        Petter Meave Mercado<br />
                        <small>Admin</small>
                    </span>
                </figcaption>
            </figure>
            <div class="full-width tittles navLateral-body-tittle-menu">
                <i class="zmdi zmdi-desktop-mac"></i><span class="hide-on-tablet">&nbsp; PANEL DE CONTROL</span>
            </div>
            <div class="full-width">
                <ul class="full-width list-unstyle menu-principal">
                    <li class="full-width">
                        <router-link to="/" class="full-width">
                            <div class="navLateral-body-cl">
                                <i class="zmdi zmdi-view-dashboard"></i>
                            </div>
                            <div class="navLateral-body-cr hide-on-tablet">INICIO</div>
                        </router-link>
                    </li>
                    <li class="full-width divider-menu-h"></li>
                    <li class="full-width">
                        <router-link to="/areaTrabajo" class="full-width btn-subMenu">
                            <div class="navLateral-body-cl">
                                <i class="zmdi zmdi-case"></i>
                            </div>
                            <div class="navLateral-body-cr hide-on-tablet">AREA</div>

                        </router-link>
                    </li>
                    <li class="full-width divider-menu-h"></li>
                    <li class="full-width">
                        <router-link to="/activo" class="full-width">
                            <div class="navLateral-body-cl">
                                <i class="zmdi zmdi-washing-machine"></i>
                            </div>
                            <div class="navLateral-body-cr hide-on-tablet">ACTIVOS</div>
                        </router-link>
                        <!-- <a href="products.html" class="full-width">

                        </a> -->
                    </li>
                    <li class="full-width divider-menu-h"></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "inicio_component",
};
</script>
