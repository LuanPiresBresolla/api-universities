<h1 align="center">API Universities</h1>

<p align="center">
  Busque universidades por todo o Brasil
</p>

## IMPORTANTE!

<p align="justify">
  As universidades foram retiradas do censo do INEP, que foi realizado em 29 de Agosto de 2013, e atualizado 18 de Agosto de 2016. Podem conter informações incorretas. Qualquer informação incorreta nos avise, para que possamos ajustar as devidas informações.
</p>

## Como utilizar

**https://api-universities.herokuapp.com**

**GET /universities**

* Retorna todas as universidades cadastradas

```json
[
  {
    "id": 1,
    "full_name": "UNIVERSIDADE FEDERAL DE MATO GROSSO",
    "name": "UFMT",
    "ibge": "5103403",
    "city": "CUIABA",
    "uf": "MT",
    "zipcode": "78060900",
    "street": "AVENIDA FERNANDO CORREA DA COSTA",
    "number": "2367",
    "neighborhood": "BOA ESPERANÇA",
    "phone": "(65) 3615 8302",
    "created_at": "2020-08-29 23:50:17"
  },
  {
    "id": 2,
    "full_name": "UNIVERSIDADE DE BRASÍLIA",
    "name": "UNB",
    "ibge": "5300108",
    "city": "BRASILIA",
    "uf": "DF",
    "zipcode": "70910900",
    "street": "CAMPUS UNIVERSITÁRIO DARCY RIBEIRO",
    "number": "SN",
    "neighborhood": "ASA NORTE",
    "phone": "(61) 3307-1750/2600",
    "created_at": "2020-08-29 23:50:17"
  }
]
```

**GET /universities/:id**

* :id - Envie o id da universidade nos parâmetros de rota, para buscar apenas os dados desta universidade.

```json
{
  "id": 1,
  "full_name": "UNIVERSIDADE FEDERAL DE MATO GROSSO",
  "name": "UFMT",
  "ibge": "5103403",
  "city": "CUIABA",
  "uf": "MT",
  "zipcode": "78060900",
  "street": "AVENIDA FERNANDO CORREA DA COSTA",
  "number": "2367",
  "neighborhood": "BOA ESPERANÇA",
  "phone": "(65) 3615 8302",
  "created_at": "2020-08-29 23:50:17"
}
```

**GET universities-uf?uf=MT**

* ?uf=MT - Envie a sigla do estado nos query params, para buscar apenas as universidades daquele estado.

```json
{
  "id": 1,
  "full_name": "UNIVERSIDADE FEDERAL DE MATO GROSSO",
  "name": "UFMT",
  "ibge": "5103403",
  "city": "CUIABA",
  "uf": "MT",
  "zipcode": "78060900",
  "street": "AVENIDA FERNANDO CORREA DA COSTA",
  "number": "2367",
  "neighborhood": "BOA ESPERANÇA",
  "phone": "(65) 3615 8302",
  "created_at": "2020-08-29 23:50:17"
}
```

**GET universities/ibge/:id**

* :id - Envie o código do ibge do municipio nos parâmetros de rota, para buscar todas as universidades daquele municipio.

```json
[
  {
    "id": 38,
    "full_name": "FUNDAÇÃO UNIVERSIDADE DO ESTADO DE SANTA CATARINA",
    "name": "UDESC",
    "ibge": "4205407",
    "city": "FLORIANOPOLIS",
    "uf": "SC",
    "zipcode": "88035001",
    "street": "AVENIDA MADRE BENVENUTA",
    "number": "2007",
    "neighborhood": "ITACORUBI",
    "phone": "(48)33218017",
    "created_at": "2020-08-29 23:50:17"
  },
  {
    "id": 317,
    "full_name": "UNIVERSIDADE FEDERAL DE SANTA CATARINA",
    "name": "UFSC",
    "ibge": "4205407",
    "city": "FLORIANOPOLIS",
    "uf": "SC",
    "zipcode": "88040900",
    "street": "CAMPUS UNIVERSITÁRIO",
    "number": "SN",
    "neighborhood": "TRINDADE",
    "phone": "(48)  3721 9000",
    "created_at": "2020-08-29 23:50:19"
  }
]
```
