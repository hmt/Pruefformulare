<h1>Prüfe alle Datensätze auf Fehler und Warnungen</h1>
<button on:click={() => holeSchueler(2)}>Aktive Schüler</button>
<button on:click={() => holeSchueler(8)}>Fertige Schüler</button>

{#if alleSchueler}
  {#await alleSchueler then schueler}
    {#each schueler as s}
      <dl><b>{s.Name}, {s.Klasse}:</b></dl>
      {#each  s.errors as error}
        <dd>{error.field}: {error.type === "required" ? 'erforderlich':error.type}</dd>
      {/each}
    {/each}
  {/await}
{/if}


<script>
  import Validator from 'fastest-validator'
  import * as schema from './schema.js'
  export let jahr, abschnitt, knexConfig
  let v = new Validator();


const Schueler = R('schild').Schueler
Schueler.knex(R('knex')(knexConfig))
let alleSchueler
async function holeSchueler (status) {
    // alle Schüler aus der DB holen
  const a = await Schueler.query().where('Status', status)
    .andWhere('Geloescht', '-')
    .andWhere('Gesperrt', '-')
  alleSchueler = a.map(s => ({...s, errors: promise(s)}))
    .filter(s => s.errors.length)
}

function promise (s) { return v.validate(s, schema.schueler) }
</script>