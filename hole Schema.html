<input bind:value="{modelName}" placeholder="Model Name"><button on:click="{handler}">Hole Schema</button>
<p>Mögliche Werte sind z.B. Schüler, AbiAbschluss, etc. Siehe schild.js</p>
{#each res as r}
  <br>{r}
{/each}
<script>
  export let jahr, abschnitt, knexConfig
  let modelName = ''

  function handler () {
    mappen(modelName)
  }

  let schueler, res=[]

  async function mappen (m) {
    const model = R('schild')[m]
    model.knex(R('knex')(knexConfig))
    const types = await model.query().columnInfo()
    res = Object.entries(types)
      .map(([k,v]) => `${k}: { type: '${type(v.type)}', required: true, empty: false },`)
      .sort()
  }

  function type (v) {
    switch (v) {
      case 'int':
      case 'smallint':
      case 'float':
        return 'number'
        break;
      case 'char':
      case 'varchar':
      case 'text':
        return 'string'
        break;
      case 'datetime':
        return 'date'
        break;
      case 'object':
        return 'object'
        break;
      default:
        console.log(v)
        break;
    }
  }
</script>
