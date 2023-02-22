export const schueler = {
  ASDSchulform: { type: 'string', empty: false },
  AbschlussDatum: { type: 'string', empty: false }, //pattern: /\d{2}\.\d{2}\.20\d{2}/ },
  AktAbschnitt: { type: 'number', integer: true },
  AktSchuljahr: { type: 'number', integer: true },
  AnmeldeDatum: { type: 'date', convert: true },
  Aufnahmedatum: { type: 'date', convert: true },
  BeginnBildungsgang: { type: 'date', convert: true },
  Fachklasse_ID: { type: 'number', integer: true },
  FotoVorhanden: { type: 'string', empty: false },
  Geburtsdatum: { type: 'date', convert: true },
  Geburtsort: { type: 'string', empty: false },
  Geloescht: { type: 'string', empty: false },
  Geschlecht: { type: 'number', integer: true, min: 3, max: 10 },
  Gesperrt: { type: 'string', empty: false },
  Klasse: { type: 'string', empty: false },
  Name: { type: 'string', empty: false },
  OrtAbk: { type: 'string', empty: false },
  PLZ: { type: 'string', empty: false, length: 5, numeric: true },
  Strasse: { type: 'string', empty: false },
  Telefon: { type: 'string', optional: true },
  Vorname: { type: 'string', empty: false }
}

export const abschnitt = {
  Abschnitt: { type: 'number', integer: true, min: 1, max: 2 },
  Fachklasse_ID: { type: 'number', integer: true },
  Jahr: { type: 'number', integer: true, min: 2000 },
  Klasse: { type: 'string', empty: false },
  KlassenLehrer: { type: 'string', empty: false, length: 3 },
  Konferenzdatum: { type: 'date', convert: true },
  SumFehlStd: { type: 'number', integer: true },
  SumFehlStdU: { type: 'number', integer: true },
  ZeugnisDatum: { type: 'date', convert: true }
}
export const abi = {
  Durchschnitt_I: { type: 'number', required: true, empty: false },
  GesamtPunktzahl: { type: 'number', required: true, empty: false },
  Kurse_I: { type: 'number', required: true, empty: false },
  Note: { type: 'string', required: true, empty: false },
  Notensprung: { type: 'number', required: true, empty: false },
  PruefungBestanden: { type: 'string', required: true, empty: false },
  Punktsumme_I: { type: 'number', required: true, empty: false },
  Punktsumme_II: { type: 'number', required: true, empty: false },
  SummeGK: { type: 'number', required: true, empty: false },
  SummeLK: { type: 'number', required: true, empty: false },
  Zugelassen: { type: 'string', required: true, empty: false }
}

export const fhr = {
  Note: { type: 'string', required: true, empty: false }
}

export const ba = {
  Bestanden: { type: 'string', required: true, empty: false },
  Zeugnis: { type: 'string', required: true, empty: false },
  Zulassung: { type: 'string', required: true, empty: false }
}

export const noten = {
  noten: {
    type: "array", min: 2, items: {
      type: "object", props: {
        AufZeugnis: { type: 'string', contains: '+' },
        NotenKrz: { type: 'string', empty: false }
      }
    }
  }
}