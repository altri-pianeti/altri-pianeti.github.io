# Setup — da fare per portare il blog online

Il sito è pronto in locale. Restano dei passaggi che richiedono account personali (non posso crearli io per voi). Quando siete pronti, li facciamo insieme passo passo.

## 1. Account GitHub per Sara

1. Su [github.com](https://github.com), creare un nuovo account con lo username che diventerà l'indirizzo del blog: `<username>.github.io`.
   Esempio: username `saragaio` → sito su `saragaio.github.io`.
2. Creare un repository **pubblico** con nome **esattamente uguale** allo username seguito da `.github.io` (es. `saragaio.github.io`).

## 2. Pubblicare il codice

1. Caricare il contenuto di questa cartella (`sara-blog`) nel nuovo repository (lo facciamo insieme: aggiungo il remote e faccio il push).
2. Su GitHub: Settings → Pages → verificare che la pubblicazione avvenga dal branch `main` (di solito automatico per i repo `<username>.github.io`).
3. Dopo qualche minuto il sito sarà visibile su `https://<username>.github.io`.

## 3. Pannello di pubblicazione per Sara (Decap CMS)

Il sito ha già una pagina `/admin` pronta, ma per farla funzionare serve autenticare Sara con GitHub. Servono due cose:

1. **Una GitHub OAuth App**
   - Sul nuovo account: Settings → Developer settings → OAuth Apps → New OAuth App.
   - Homepage URL: `https://<username>.github.io`
   - Authorization callback URL: la forniamo dopo aver creato il proxy (punto 2).
   - Otterrete un **Client ID** e un **Client Secret**: da tenere privati.

2. **Un piccolo "proxy" di autenticazione** (necessario perché GitHub Pages non esegue codice server, serve solo per il login)
   - Si usa un account gratuito su [Cloudflare Workers](https://workers.cloudflare.com/) (nessuna carta di credito richiesta per il piano free).
   - Vi guido nel deploy di un worker già pronto per questo scopo (poche righe, configurazione guidata) con Client ID e Client Secret come variabili segrete.
   - Una volta online, si aggiorna `admin/config.yml`:
     - `repo:` con `<username>/<username>.github.io`
     - `base_url:` con l'indirizzo del worker

3. Da quel momento, Sara si collega a `https://<username>.github.io/admin`, clicca "Login with GitHub" ed entra nel pannello.

## 4. Dominio personalizzato (facoltativo, in futuro)

Se in futuro vorrete un dominio tipo `nomedisara.com` invece del sottodominio gratuito, si può aggiungere in qualunque momento dalle impostazioni di GitHub Pages, senza dover rifare nulla del sito.
