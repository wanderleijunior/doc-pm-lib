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
            :class="{}">
            <span v-if="column.badge !== false" class="badge bg-secondary">{{ item[column.key] }}</span>
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
        { key: 'name', label: 'Nome', thClass: '' },
        { key: 'type', label: 'Tipo', thClass: '' },
        { key: 'default', label: 'Padrão', thClass: '' },
        { key: 'description', label: 'Descrição', badge: false },
      ],
      items: [],
    };
  },
  mounted() {
      import('../../data/pm-form-save/propriedades.js').then(response => {
          this.items = response.default;
      })
  }
};
</script>

<style lang="scss" scoped>
</style>