<template>
    <div class="home">
        <br>
        <br>

        <div class="mdl-tabs__panel is-active" id="gestionArea">
            <div class="mdl-grid">
                <div
                    class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
                    <div class="full-width panel mdl-shadow--2dp">
                        <div class="full-width panel-tittle bg-primary text-center tittles">
                            Activos
                        </div>
                        <div class="full-width panel-content">
                            <form @submit.prevent="guardar()">
                                <h5 class="text-condensedLight">Información Básica</h5>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <select class="mdl-textfield__input" name="tipoActivo" id="tipoActivo"
                                        v-model="activo.tipo" @change="changeLocation">
                                        <option selected="true">Seleccionar Tipo</option>
                                        <option v-for="d in tipo" v-bind:value="d.tipo_area">{{ d.tipo_area }}</option>
                                    </select>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <select class="mdl-textfield__input" v-model="activo.area" name="area" id="area">
                                        <option selected="true">Seleccionar Tipo</option>
                                        <option v-for="d in area" v-bind:value="d.nombre">{{ d.nombre }}</option>
                                    </select>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" type="text "
                                        pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="marca" name="marca"
                                        v-model="activo.marca">
                                    <label class="mdl-textfield__label" for="marca">Marca</label>
                                    <span class="mdl-textfield__error">Dato inválido</span>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" type="text "
                                        pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="modelo" name="modelo"
                                        v-model="activo.modelo">
                                    <label class="mdl-textfield__label" for="modelo">Modelo</label>
                                    <span class="mdl-textfield__error">Dato Inválido</span>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield">
                                    <select class="mdl-textfield__input" v-model="activo.estado">
                                        <option value="" disabled="" selected="">Seleccionar Estado</option>
                                        <option value="Nuevo">Nuevo</option>
                                        <option value="Usado">Usado</option>
                                        <option value="Desuo">Desuso</option>
                                    </select>
                                </div>



                                <p class="text-center">
                                    <button
                                        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored bg-primary"
                                        id="btn-addPayment" type="submit">
                                        <i class="zmdi zmdi-plus"></i>
                                    </button>
                                <div class="mdl-tooltip" for="btn-addPayment">Agregar</div>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'activos',
    data() {
        return {
            activo: {
                tipo: [],
                area: [],
                marca: null,
                modelo: null,
                estado: []
            },
            tipo: [],
            area: [],
            datosActivos: []
        }
    },
    methods: {
        getActivo() {
            axios({
                method: 'GET',
                url: 'http://localhost:4444/Activos/' + this.$route.params.id,
            })
                .then(response => { this.activo = response.data })
        },
        guardar() {
            axios({
                method: 'PATCH',
                url: 'http://localhost:4444/Activos/' + this.$route.params.id,
                data: this.activo
            })
                .then(response => {
                    this.$router.push('/activo');
                })
        },
        getArea() {
            axios({
                method: 'GET',
                url: 'http://localhost:4444/Area'
            }).then(response => { this.area = response.data })
                .catch(e => console.log(e))
        },
        getTipo() {
            axios({
                method: 'GET',
                url: 'http://localhost:4444/Tipo_area'
            }).then(response => { this.tipo = response.data })
                .catch(e => console.log(e))
        },
        // getActivos() {
        //     axios({
        //         method: 'GET',
        //         url: 'http://localhost:4444/Activos'
        //     })
        //         .then(response => {
        //             this.datosActivos = response.data
        //         })
        //         .catch(e => console.log(e))

        // }
    },
    mounted() {
        this.getActivo(),
            this.getArea(),
            this.getTipo()
    }
}
</script>
