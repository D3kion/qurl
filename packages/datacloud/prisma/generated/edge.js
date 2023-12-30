
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.LinkScalarFieldEnum = {
  id: 'id',
  domain: 'domain',
  key: 'key',
  url: 'url',
  archived: 'archived',
  expiresAt: 'expiresAt',
  password: 'password',
  proxy: 'proxy',
  title: 'title',
  description: 'description',
  image: 'image',
  utmSource: 'utmSource',
  utmMedium: 'utmMedium',
  utmCampaign: 'utmCampaign',
  utmTerm: 'utmTerm',
  utmContent: 'utmContent',
  rewrite: 'rewrite',
  ios: 'ios',
  android: 'android',
  geo: 'geo',
  userId: 'userId',
  publicStats: 'publicStats',
  clicks: 'clicks',
  lastClicked: 'lastClicked',
  checkDisabled: 'checkDisabled',
  lastChecked: 'lastChecked',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  comments: 'comments'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Link: 'Link'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/d3kion/code/__/qurl/packages/datacloud/prisma/generated",
      "fromEnvVar": null
    },
    "config": {
      "relationMode": "prisma",
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgID0gImdlbmVyYXRlZCIKICByZWxhdGlvbk1vZGUgPSAicHJpc21hIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIGVtYWlsICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBuYW1lICAgICAgICAgIFN0cmluZz8KICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lPwogIGltYWdlICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIGRlbGV0ZWRBdCAgICAgRGF0ZVRpbWU/CgogIC8vIGFjY291bnRzIEFjY291bnRbXQogIC8vIHNlc3Npb25zIFNlc3Npb25bXQogIC8vIHByb2plY3RzIFByb2plY3RVc2Vyc1tdCiAgbGlua3MgTGlua1tdCiAgLy8gdG9rZW5zICAgVG9rZW5bXQp9Cgptb2RlbCBMaW5rIHsKICBpZCAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgZG9tYWluICAgIFN0cmluZyAvLyBkb21haW4gb2YgdGhlIGxpbmsgKGUuZy4gcXVybC5saSkg4oCTIGFsc28gc3RvcmVkIG9uIFJlZGlzCiAga2V5ICAgICAgIFN0cmluZyAvLyBrZXkgb2YgdGhlIGxpbmsgKGUuZy4gL2dpdGh1Yikg4oCTIGFsc28gc3RvcmVkIG9uIFJlZGlzCiAgdXJsICAgICAgIFN0cmluZyAvLyB0YXJnZXQgdXJsIChlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS9xdXJsaHEvc2RrKSDigJMgYWxzbyBzdG9yZWQgb24gUmVkaXMKICBhcmNoaXZlZCAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKSAvLyB3aGV0aGVyIHRoZSBsaW5rIGlzIGFyY2hpdmVkIG9yIG5vdAogIGV4cGlyZXNBdCBEYXRlVGltZT8gLy8gd2hlbiB0aGUgbGluayBleHBpcmVzIOKAkyBzdG9yZWQgb24gUmVkaXMgdmlhIHR0bAogIHBhc3N3b3JkICBTdHJpbmc/IC8vIHBhc3N3b3JkIHRvIGFjY2VzcyB0aGUgbGluawoKICBwcm94eSAgICAgICBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKSAvLyBQcm94eSB0byB1c2UgY3VzdG9tIE9HIHRhZ3MgKHN0b3JlZCBvbiByZWRpcykg4oCTwqBpZiBmYWxzZSwgd2lsbCB1c2UgT0cgdGFncyBmcm9tIHRhcmdldCB1cmwKICB0aXRsZSAgICAgICBTdHJpbmc/IC8vIE9HIHRpdGxlIGZvciB0aGUgbGluayAoZS5nLiBxVVJMLmxpIC0gTGluayBNYW5hZ2VtZW50IEluZnJhc3RydWN0dXJlKQogIGRlc2NyaXB0aW9uIFN0cmluZz8gQGRiLlZhckNoYXIoMjgwKSAvLyBPRyBkZXNjcmlwdGlvbiBmb3IgdGhlIGxpbmsgKGUuZy4gQSBsaW5rIG1hbmFnZW1lbnQgdG9vbCBmb3IgbW9kZXJuIG1hcmtldGluZyB0ZWFtcyB0byBjcmVhdGUsIHNoYXJlLCBhbmQgdHJhY2sgc2hvcnQgbGlua3MuKQogIGltYWdlICAgICAgIFN0cmluZz8gLy8gT0cgaW1hZ2UgZm9yIHRoZSBsaW5rIChlLmcuIGh0dHBzOi8vZHViLnNoL29nLWltYWdlLnBuZykKCiAgLy8gVVRNIHBhcmFtZXRlcnMKICB1dG1Tb3VyY2UgICBTdHJpbmc/IC8vIFVUTSBzb3VyY2UgZm9yIHRoZSBsaW5rIChlLmcuIHlvdXR1YmUuY29tKQogIHV0bU1lZGl1bSAgIFN0cmluZz8gLy8gVVRNIG1lZGl1bSBmb3IgdGhlIGxpbmsgKGUuZy4gc29jaWFsKQogIHV0bUNhbXBhaWduIFN0cmluZz8gLy8gVVRNIGNhbXBhaWduIGZvciB0aGUgbGluayAoZS5nLiBzdW1tZXItc2FsZSkKICB1dG1UZXJtICAgICBTdHJpbmc/IC8vIFVUTSB0ZXJtIGZvciB0aGUgbGluayAoZS5nLiBxdXJsKQogIHV0bUNvbnRlbnQgIFN0cmluZz8gLy8gVVRNIGNvbnRlbnQgZm9yIHRoZSBsaW5rIChlLmcuIGRlc2NyaXB0aW9uKQoKICAvLyBMaW5rIGNsb2FraW5nL21hc2tpbmcgdmlhIHJld3JpdGUKICByZXdyaXRlIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpIC8vIHdoZXRoZXIgdG8gcmV3cml0ZSB0aGUgbGluayBvciBub3QKCiAgLy8gQ3VzdG9tIGRldmljZSB0YXJnZXRpbmcKICBpb3MgICAgIFN0cmluZz8gLy8gY3VzdG9tIGxpbmsgZm9yIGlPUyBkZXZpY2VzCiAgYW5kcm9pZCBTdHJpbmc/IC8vIGN1c3RvbSBsaW5rIGZvciBBbmRyb2lkIGRldmljZXMKICBnZW8gICAgIEpzb24/IC8vIGN1c3RvbSBsaW5rIGZvciBzcGVjaWZpYyBjb3VudHJpZXMKCiAgLy8gVXNlciB3aG8gY3JlYXRlZCB0aGUgbGluawogIHVzZXIgICBVc2VyPyAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCBTdHJpbmc/CgogIC8vIFByb2plY3QgdGhhdCB0aGUgbGluayBiZWxvbmdzIHRvCiAgLy8gcHJvamVjdCAgICAgICBQcm9qZWN0PyBAcmVsYXRpb24oZmllbGRzOiBbcHJvamVjdElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IENhc2NhZGUsIG9uRGVsZXRlOiBDYXNjYWRlKQogIC8vIHByb2plY3RJZCAgICAgU3RyaW5nPwogIC8vIFJlbGF0aW9uYWwgcmVmZXJlbmNlIHRvIHRoZSBwcm9qZWN0IGRvbWFpbgogIC8vIHByb2plY3REb21haW4gRG9tYWluPyAgQHJlbGF0aW9uKGZpZWxkczogW2RvbWFpbl0sIHJlZmVyZW5jZXM6IFtzbHVnXSwgb25VcGRhdGU6IENhc2NhZGUsIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBwdWJsaWNTdGF0cyAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkgLy8gd2hldGhlciB0byBzaG93IHB1YmxpYyBzdGF0cyBvciBub3QKICBjbGlja3MgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwKSAvLyBudW1iZXIgb2YgY2xpY2tzCiAgbGFzdENsaWNrZWQgICBEYXRlVGltZT8gLy8gd2hlbiB0aGUgbGluayB3YXMgbGFzdCBjbGlja2VkCiAgY2hlY2tEaXNhYmxlZCBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpIC8vIGRpc2FibGUgNDA0IGNoZWNraW5nCiAgbGFzdENoZWNrZWQgICBEYXRlVGltZT8gLy8gd2hlbiB0aGUgbGluayB3YXMgbGFzdCBjaGVja2VkIGZvciA0MDRzCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSAgQHVwZGF0ZWRBdAoKICAvLyBMaW5rIHRhZ3MKICAvLyB0YWcgICBUYWc/ICAgIEByZWxhdGlvbihmaWVsZHM6IFt0YWdJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgLy8gdGFnSWQgU3RyaW5nPwoKICAvLyBDb21tZW50cyBvbiB0aGUgcGFydGljdWxhciBzaG9ydGxpbmsKICBjb21tZW50cyBTdHJpbmc/CiAgLy8gQEBmdWxsdGV4dChba2V5LCB1cmxdKQoKICBAQHVuaXF1ZShbZG9tYWluLCBrZXldKQogIC8vIEBAaW5kZXgocHJvamVjdElkKQogIC8vIEBAaW5kZXgoZG9tYWluKQogIC8vIEBAaW5kZXgodGFnSWQpCiAgLy8gQEBpbmRleChwcm94eSkKICAvLyBAQGluZGV4KHBhc3N3b3JkKQogIC8vIEBAaW5kZXgoY3JlYXRlZEF0KHNvcnQ6IERlc2MpKQogIC8vIEBAaW5kZXgoY2xpY2tzKHNvcnQ6IERlc2MpKQogIC8vIEBAaW5kZXgobGFzdENsaWNrZWQpCiAgLy8gQEBpbmRleChjaGVja0Rpc2FibGVkKQogIC8vIEBAaW5kZXgobGFzdENoZWNrZWQoc29ydDogQXNjKSkKICBAQGluZGV4KHVzZXJJZCkKfQo=",
  "inlineSchemaHash": "aa96a09faf2a976ba0ffe1965dc3d736486f02f7de91ebf4b88f6ca9c388b15d"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"links\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Link\",\"relationName\":\"LinkToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Link\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proxy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utmSource\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utmMedium\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utmCampaign\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utmTerm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utmContent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewrite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ios\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"android\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LinkToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicStats\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clicks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastClicked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checkDisabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastChecked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"comments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"domain\",\"key\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"domain\",\"key\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

