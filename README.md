# WorldCities

A learning project: an ASP.NET Core Web API and an Angular client for browsing world cities and countries.

I am working through [ASP.NET Core 8 and Angular](https://www.packtpub.com/en-us/product/aspnet-core-8-and-angular-9781805129936) by Valerio De Sanctis, and building this repo on current releases instead of the book’s .NET 8 and Angular versions. The point is to learn the stack by following the book and adapting it where the tooling has moved on.

## Stack

| | The book | This repo |
| --- | --- | --- |
| .NET | 8 (SDK 8.0.101) | 10 (SDK 10.0.300) |
| Entity Framework Core | 8 | 10 |
| Database | SQL Server 2022 | SQLite |
| Angular | 17 | 22 |
| UI | Angular Material | PrimeNG and Tailwind CSS |

SQLite is a deliberate stand-in for the book’s SQL Server. Entity classes, the `DbContext`, and queries stay the same. The provider registration and the connection string are the parts that differ.

## Status

In progress, early in the data model.

Done so far:

- Angular app shell with routing, a navigation menu, a home page, a health-check page, and a not-found page
- ASP.NET Core API with OpenAPI
- Entity Framework Core packages referenced, including the SQLite provider and design-time tools

Not built yet: `City` and `Country` entities, the database context, migrations, and the city and country API.

## Run it locally

Requires the .NET 10 SDK and Node.js.

```bash
dotnet run --project WorldCities.Server
```

In another terminal:

```bash
cd worldcities.client
npm install
npm start
```

The API listens on `http://localhost:40080`. The Angular dev server proxies `/api` to that address.
