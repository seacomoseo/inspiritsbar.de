# inspiritsbar.de

[![inspiritsbar.de](/assets/media/base/icon.png)](https://inspiritsbar.de/)


## STEPS


### Local

- Design
  - GENERAL
    - `config.yml`
    - `data/*.{yml,md}`
  - CONTENT
    - `content/*`
      - `blog/divisores.md` ⏩ remove
      - `admin` ⏩ `draft: true` and/or change params and content
      - SCRAP
        - Copy [this Spreadsheet Layout](https://docs.google.com/spreadsheets/d/1bJQaAFoBAwHhWz_WFRIHlkHoDmZZyT8H8NtdCnSTdaU)
        - First scrap with Screaming Frog and paste `url` and `title`
        - Second scrap with `IMPORTXML` formula in `content-start` tab
        - If need HTML content
          - Three scrap with `Web Scraper` chrome extension and paste in `content-scrap` tab
          - Copy `content-start` tab into `content-next` and get `body_code` (by `content-scrap`) with `VLOOKUP` formula
          - Copy `body_code` column to `body`, replace double quotes, [convert to Markdown](https://smalldev.tools/html-to-markdown-converter-online) and clean it
          - Paste in `file.md` in `./Downloads` and run `_tools/md-replaces.command`
          - Check `file_new.md` content:
            - headers: `^#`
            - images: `!\[.+?\)`
            - links: `(^|[^!])\[.+?\)`
            - internal links: `https?://(www\.)?example\.com`
          - Paste in sheet
        - Export to CSV like `./Downloads/file.csv` and run `_tools/csv-to-md.command`
        - Move files from `markdown_files` to `blog` project
  - HTML
    - `layouts/*`
    - `data/config.yml ⏩ custom_code.html_head.code`
    - `data/config.yml ⏩ custom_code.html_body.code`
  - CSS
    - `assets/css/*`
    - `assets/css/` ⏩ `_variables-custom.scss` + `_custom.scss`
    - `data/config.yml ⏩ custom_code.css.code`
  - JS
    - `assets/js/*`
    - `layouts/partials/sections/common/scripts.html`
    - `data/config.yml ⏩ custom_code.js.code`
  - IMG
    - `assets/media/*`
  - REDIRECTS
    - `assets/redirects.md`
  - ROBOTS
    - `assets/robots.md`
  - If Multilanguaje and Multihosting, add `cp ./public/[es|en]/404.html ./public/` in `netlify.toml ⏩ build.command`
  - Try in Safari and Firefox
  - Check in [W3 Validator](https://validator.w3.org/)
  - Check in [PageSpeed Insights](https://pagespeed.web.dev/)


### After client validate web


#### Domain

- If Netlify
  - [`Domain Management / settings`](https://app.netlify.com/sites/inspiritsbar/settings/domain)
  - `Add custom domain`
  - `Check DNS configuration` Copy
  - Add `DNS Records` copied from Netlify to Domain gestor:
    - From: `inspiritsbar.de`
      DNS Record: `ALIAS`, `ANAME` or `flattened CNAME`
      To: `apex-loadbalancer.netlify.com`
    - From: `inspiritsbar.de`
      DNS Record: `A`
      To: `75.2.60.5`
    - From: `www`
      DNS Record: `CNAME`
      To: `inspiritsbar.netlify.app.`
    - Maybe you need to eliminate the previous records with similar names
  - `Verify DNS configuration`
  - If it does not work after a while, try `Set as main domain` in the `www` version and also in te `nowww` version


#### Forms

- If Netlify Form
  - Don't need configure nothing! Build like you want in local or with CMS
  - [`Netlify ⏩ Site ⏩ Forms ⏩ Form Notifications`](https://app.netlify.com/sites/inspiritsbar/settings/forms#form-notifications) ⏩ `Add notification ⏩ Email notification ⏩ Email to Notify`
    - `Email to notify` = Emails of collaborators that want receive submissions
    - `Custom email subject line` = `Formulario de contacto de inspiritsbar.de`
    - `Save`
  - Submissions: [`Netlify site ⏩ Forms`](https://app.netlify.com/sites/inspiritsbar/forms)


#### [Google Search Console](https://search.google.com/search-console)

- Add property
- Verify versions ⏩ `data/config.yml`
  - `google_analytics`
  - `google_site_verification`
  - `google_file_verification`
  - DNS:
    From: `@`
    DNS Record: `TXT`
    To: `google-site-verification=[google_site_verification]`
- Link with Analytics
- Add sitemap.xml


#### [Google My Business](https://business.google.com/)

- `Add company ⏩ ...` ⏩ whait 13 days to receive postal and insert code to verify


##### Delivery

Send to all collaborators next:

###### WhatsApp

```md
*ENTREGA WEB inspiritsbar.de*

Te dejo aquí este mensaje como referencia (también te lo paso por email con el asunto `ENTREGA WEB inspiritsbar.de`).

En el siguiente enlace tienes instrucciones sobre cosas referentes a tu sitio web (cómo modificar cosas, información extra, ect.):

https://seacomoseo.com/entrega/

No es necesario que lo veas, solo lo es si quieres hacer cosas por tu cuenta o si no estoy disponible.

¡Un saludo!
```

###### Mail

```
Asunto: ENTREGA WEB inspiritsbar.de
Cuerpo:
Te dejo aquí este email como referencia.

En el siguiente enlace tienes instrucciones sobre cosas referentes a tu sitio web (cómo modificar cosas, información extra, ect.):

https://seacomoseo.com/entrega/

No es necesario que lo veas, solo lo es si quieres hacer cosas por tu cuenta o si no estoy disponible.

¡Un saludo!
```
