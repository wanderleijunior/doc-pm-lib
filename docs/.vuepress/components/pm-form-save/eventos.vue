<template>
  <table class="table ">
    <thead class="table-secondary">
      <tr>
        <th v-for="(item, index) in columns" :key="index" scope="col">
            {{ item.label}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(column, indexColumn) in columns" 
            :key="indexColumn"
            :class="{'text-center': !column.description}">
            <span v-if="!column.description" 
                  class="badge bg-secondary"
                  v-html="item[column.key]"
                >
            </span>
            <span v-else>{{ item[column.key] }}</span>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { key: 'name', label: 'Nome' },
        { key: 'parameters', label: 'Paramêtros' },
        { key: 'description', label: 'Descrição', description: true },
      ],
      items: [],
    };
  },
  mounted() {
      import('../../data/pm-form-save/eventos.js').then(response => {
          this.items = response.default;
      })
  }
};
</script>

<style lang="css">
  .thead-primary {
    background-color: ccc !important;
  }

  .column-1 {
    width: 20% !important;
  }

  .column-2 {
    width: 40%;
  }

</style>