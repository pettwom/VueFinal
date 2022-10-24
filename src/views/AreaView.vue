<template>
    <div class="home">
        <br>
        <br>

        <div class="mdl-tabs__panel is-active" id="gestionArea">
            <div class="row">
                <div class="col s1 offset-s1">
                    <button class="btn-floating btn-large waves-effect waves-light green darken-3"
                        v-on:click="irA('adicionarArea', '')">
                        <i class="large material-icons">add</i>Agregar</button>
                    <div class="mdl-tooltip" for="btn-addPayment">Adicionar Área</div>
                </div>
            </div>
            <div class="full-width panel-tittle bg-primary text-center tittles">
                Listado de Areas
            </div>
            <div class="mdl-tabs__panel is-active" id="areaListado"
                style="position: relative;display: inline-block;width: 100%;margin-bottom: 5%;">
                <div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
                    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width table-responsive">
                        <thead>
                            <tr>
                                <th class="mdl-data-table__cell--non-numeric">ID</th>
                                <th>ÁREA</th>
                                <th>ENCARGADO</th>
                                <th>CANTIDAD</th>
                                <th>ESTADO</th>
                                <th>OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody v-for="d of area">
                            <tr>
                                <td class="mdl-data-table__cell--non-numeric">{{ d.id }}</td>
                                <td>{{ d.nombre }}</td>
                                <td>{{ d.encargado }}</td>
                                <td>{{ d.cantidad }}</td>
                                <td>{{ d.estado }}</td>
                                <td>
                                    <button class="waves-effect waves-light btn lime accent-2"
                                        v-on:click="irA('editarArea', d.id)">Editar</button>
                                    &nbsp;&nbsp;
                                    <button class="waves-effect waves-light btn red lighten-1"
                                        v-on:click="irA('eliminarArea', d.id)">Eliminar</button>
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
import { assertExpressionStatement } from '@babel/types';

export default {
    name: 'area',
    data() {
        return {
            area: []
        }
    },
    methods: {
        getArea() {
            axios({
                method: "GET",
                url: "http://localhost:4444/Area"
            })
                .then(response => {
                    this.area = response.data
                })
        },
        irA(opcion, id_area) {
            switch (opcion) {
                case 'editarArea':
                    this.$router.push({ name: 'editarArea', params: { id: id_area } })
                    break;
                case 'eliminarArea':
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
                                url: 'http://localhost:4444/Area/' + id_area,
                            }).
                                then(response => {
                                    this.getArea()
                                    Swal.fire(
                                        'Eliminado!',
                                        'El Registro se Elimino correctamente.',
                                        'Exito'
                                    )
                                })
                        }
                    })
                    break;
                case 'adicionarArea':
                    this.$router.push({ name: 'adicionarArea' })
                    break;
            }
        },
    },
    mounted() {
        this.getArea()
    }
}
</script>
