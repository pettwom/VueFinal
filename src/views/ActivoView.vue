<template>
    <div class="home">
        <br>
        <br>

        <div class="mdl-tabs__panel is-active" id="gestionArea">
            <div class="row">
                <div class="col s1 offset-s1">
                    <button class="btn-floating btn-large waves-effect waves-light green darken-3"
                        v-on:click="irA('adicionarActivo', '')">
                        <i class="large material-icons">add</i>Agregar</button>
                    <label for="">Adicionar</label>
                </div>
            </div>
            <div class="row">
                <form action="">
                    <div class="input-field col s10">
                        <input placeholder="Placeholder" id="textABuscar" v-model="textABuscar" type="text"
                            class="validate">
                        <label for="first_name">Texto a Buscar</label>
                    </div>
                    <div class="input-field col s2">
                        <a class="waves-effect waves-light btn" @click.prevact="getBuscar()">Buscar</a>
                    </div>
                </form>
            </div>
            <div class="full-width panel-tittle bg-primary text-center tittles">
                Listado de Activos
            </div>
            <div class="mdl-tabs__panel is-active" id="areaListado"
                style="position: relative;display: inline-block;width: 100%;margin-bottom: 5%;">
                <div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
                    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width table-responsive">
                        <thead>
                            <tr>
                                <th class="mdl-data-table__cell--non-numeric">ID</th>
                                <th>AREA</th>
                                <th>TIPO ACTIVO</th>
                                <th>MODELO</th>
                                <th>MARCA</th>
                                <th>ESTADO</th>
                                <th>OPCION</th>
                            </tr>
                        </thead>
                        <tbody v-for="d of datosActivos">
                            <tr>
                                <td class="mdl-data-table__cell--non-numeric">{{ d.id }}</td>
                                <td>{{ d.area }}</td>
                                <td>{{ d.tipo }}</td>
                                <td>{{ d.marca }}</td>
                                <td>{{ d.modelo }}</td>
                                <td>{{ d.estado }}</td>
                                <td>
                                    <button class="waves-effect waves-light btn lime accent-2"
                                        v-on:click="irA('editarActivo', d.id)">Editar</button>
                                    &nbsp;&nbsp;
                                    <button class="waves-effect waves-light btn red lighten-1"
                                        v-on:click="irA('eliminarActivo', d.id)">Eliminar</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Swal from 'sweetalert2'

export default {
    name: 'activos',
    data() {
        return {
            textABuscar: '',
            activo: {
                tipo: '',
                area: '',
                marca: null,
                modelo: null,
                estado: ''
            },
            tipo: [],
            area: [],
            datosActivos: []
        }
    },
    methods: {
        guardar() {
            axios({
                method: 'POST',
                url: 'http://localhost:4444/Activos',
                data: this.activo
            }).then(response => {
                this.getActivo()
            }).catch(e => console.log(e))
        },
        irA(opcion, id_activo) {
            switch (opcion) {
                case 'editarActivo':
                    this.$router.push({ name: 'editarActivo', params: { id: id_activo } })
                    break;
                case 'eliminarActivo':
                    Swal.fire({
                        title: 'Eliminar?',
                        text: "Esta Seguro de querer Eliminar el registro???",
                        icon: 'danger',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, Eliminar!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            axios({
                                method: 'DELETE',
                                url: 'http://localhost:4444/Activos/' + id_activo,
                            }).
                                then(response => {
                                    this.getActivos()
                                    Swal.fire(
                                        'Eliminado!',
                                        'El Registro se Elimino correctamente.',
                                        'Exito'
                                    )
                                })
                        }
                    })
                    break;
                case 'adicionarActivo':
                    this.$router.push({ name: 'adicionarActivo' })
                    break;
            }
        },
        getBuscar() {
            axios({
                method: 'GET',
                url: 'http://localhost:4444/Activos/?q=' + this.textABuscar,
            })
                .then(response => {
                    this.datosActivos = response.data
                    // this.datosActivos = JSON.parse(JSON.stringify(this.datosActivos))
                    // this.getActivos()
                })
        },
        getActivo() {
            axios({
                method: 'GET',
                url: 'http://localhost:4444/Activos/' + this.$route.params.id,
            })
                .then(response => { this.activo = response.data })
        },
        editActivo() {
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
            }).then(response => this.area = response.data)
                .catch(e => console.log(e))
        },
        getTipo() {
            axios({
                method: 'GET',
                url: 'http://localhost:4444/Tipo_area'
            }).then(response => this.tipo = response.data)
                .catch(e => console.log(e))
        },
        getActivos() {
            axios({
                method: 'GET',
                url: 'http://localhost:4444/Activos'
            })
                .then(response => {
                    this.datosActivos = response.data
                })
                .catch(e => console.log(e))

        }
    },
    mounted() {
        this.getActivos(),
            this.getArea(),
            this.getTipo()
    }
}
</script>
