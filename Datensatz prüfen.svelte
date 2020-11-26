<h1>Prüfe alle Datensätze auf Fehler und Warnungen</h1>
Es werden automatisch alle Schüler-, Halbjahres-, und deren Notendaten geprüft.
Für weitere den Knopf drücken:
<button on:click="{() => abi = !abi}">Abitur</button>
<button on:click="{() => fhr = !fhr}">FHR</button>
<button on:click="{() => ba = !ba}">BA</button>
<table>
  <thead><tr>
    <th>Name</th><th>Schülerdaten</th><th>Abschnitt</th><th>Noten</th>
    {@html abi ? '<th>Abi</th>':''}{@html fhr ? '<th>FHR</th>':''}{@html ba ? '<th>BA</th>':''}
  </tr></thead>
  {#each validations as s}
    <tr class="border_bottom">
      <td><b>{s.Name}, {s.Klasse}:</b></td>
      {#each s.errors as errors}
        {#if errors === true}
          <td class='green'>✔</td>
        {:else}
          <td class='red'>✘</td>
        {/if}
      {/each}
    </tr>
      {#each [...Array(Math.max(...s.errors.map(e=>e && e.length || 0)))] as bar,ii}
          <tr><td colspan={1}></td>
        {#each [...Array(s.errors.length)] as foo,i}
            {#if s.errors[i][ii] && s.errors[i][ii] !== true}
              <td>{s.errors[i][ii].field}: {s.errors[i][ii].type}</td>
              {:else}<td></td>
            {/if}
        {/each}
          </tr>
      {/each}
  {/each}
</table>


<script>
  import Validator from 'fastest-validator'
  import * as schema from './schema.js'
  export let jahr, abschnitt, schueler
  let v = new Validator()
  let abi, fhr, ba

  $: validations = schueler.map(s => {
    console.log(s.abi_abschluss)
    return {
      ...s,
      errors: [
        v.validate(s, schema.schueler),
        v.validate(a(s), schema.abschnitt),
        v.validate({noten: a(s).noten}, schema.noten),
        abi && v.validate(s.abi_abschluss || {}, schema.abi),
        fhr && v.validate(s.fhr_abschluss || {}, schema.fhr),
        ba && v.validate(s.bk_abschluss || {}, schema.ba)
      ].filter(a => a)
    }
  })
  const a = (s) => s.abschnitte.find(a => a.Jahr === jahr && a.Abschnitt === abschnitt)
</script>

<style>
.red { color: red; text-align: center; min-width: 50px;}
.green { color: green; text-align: center; min-width: 50px;}
table { border-collapse: collapse; }
tr.border_bottom td { border-top:1pt solid black; }
</style>