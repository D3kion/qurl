
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
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICJnZW5lcmF0ZWQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgZW1haWwgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIG5hbWUgICAgICAgICAgU3RyaW5nPwogIGVtYWlsVmVyaWZpZWQgRGF0ZVRpbWU/CiAgaW1hZ2UgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgZGVsZXRlZEF0ICAgICBEYXRlVGltZT8KCiAgLy8gYWNjb3VudHMgQWNjb3VudFtdCiAgLy8gc2Vzc2lvbnMgU2Vzc2lvbltdCiAgLy8gcHJvamVjdHMgUHJvamVjdFVzZXJzW10KICBsaW5rcyBMaW5rW10KICAvLyB0b2tlbnMgICBUb2tlbltdCn0KCm1vZGVsIExpbmsgewogIGlkICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICBkb21haW4gICAgU3RyaW5nIC8vIGRvbWFpbiBvZiB0aGUgbGluayAoZS5nLiBxdXJsLmxpKSDigJMgYWxzbyBzdG9yZWQgb24gUmVkaXMKICBrZXkgICAgICAgU3RyaW5nIC8vIGtleSBvZiB0aGUgbGluayAoZS5nLiAvZ2l0aHViKSDigJMgYWxzbyBzdG9yZWQgb24gUmVkaXMKICB1cmwgICAgICAgU3RyaW5nIC8vIHRhcmdldCB1cmwgKGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL3F1cmxocS9zZGspIOKAkyBhbHNvIHN0b3JlZCBvbiBSZWRpcwogIGFyY2hpdmVkICBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpIC8vIHdoZXRoZXIgdGhlIGxpbmsgaXMgYXJjaGl2ZWQgb3Igbm90CiAgZXhwaXJlc0F0IERhdGVUaW1lPyAvLyB3aGVuIHRoZSBsaW5rIGV4cGlyZXMg4oCTIHN0b3JlZCBvbiBSZWRpcyB2aWEgdHRsCiAgcGFzc3dvcmQgIFN0cmluZz8gLy8gcGFzc3dvcmQgdG8gYWNjZXNzIHRoZSBsaW5rCgogIHByb3h5ICAgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpIC8vIFByb3h5IHRvIHVzZSBjdXN0b20gT0cgdGFncyAoc3RvcmVkIG9uIHJlZGlzKSDigJPCoGlmIGZhbHNlLCB3aWxsIHVzZSBPRyB0YWdzIGZyb20gdGFyZ2V0IHVybAogIHRpdGxlICAgICAgIFN0cmluZz8gLy8gT0cgdGl0bGUgZm9yIHRoZSBsaW5rIChlLmcuIHFVUkwubGkgLSBMaW5rIE1hbmFnZW1lbnQgSW5mcmFzdHJ1Y3R1cmUpCiAgZGVzY3JpcHRpb24gU3RyaW5nPyBAZGIuVmFyQ2hhcigyODApIC8vIE9HIGRlc2NyaXB0aW9uIGZvciB0aGUgbGluayAoZS5nLiBBIGxpbmsgbWFuYWdlbWVudCB0b29sIGZvciBtb2Rlcm4gbWFya2V0aW5nIHRlYW1zIHRvIGNyZWF0ZSwgc2hhcmUsIGFuZCB0cmFjayBzaG9ydCBsaW5rcy4pCiAgaW1hZ2UgICAgICAgU3RyaW5nPyAvLyBPRyBpbWFnZSBmb3IgdGhlIGxpbmsgKGUuZy4gaHR0cHM6Ly9kdWIuc2gvb2ctaW1hZ2UucG5nKQoKICAvLyBVVE0gcGFyYW1ldGVycwogIHV0bVNvdXJjZSAgIFN0cmluZz8gLy8gVVRNIHNvdXJjZSBmb3IgdGhlIGxpbmsgKGUuZy4geW91dHViZS5jb20pCiAgdXRtTWVkaXVtICAgU3RyaW5nPyAvLyBVVE0gbWVkaXVtIGZvciB0aGUgbGluayAoZS5nLiBzb2NpYWwpCiAgdXRtQ2FtcGFpZ24gU3RyaW5nPyAvLyBVVE0gY2FtcGFpZ24gZm9yIHRoZSBsaW5rIChlLmcuIHN1bW1lci1zYWxlKQogIHV0bVRlcm0gICAgIFN0cmluZz8gLy8gVVRNIHRlcm0gZm9yIHRoZSBsaW5rIChlLmcuIHF1cmwpCiAgdXRtQ29udGVudCAgU3RyaW5nPyAvLyBVVE0gY29udGVudCBmb3IgdGhlIGxpbmsgKGUuZy4gZGVzY3JpcHRpb24pCgogIC8vIExpbmsgY2xvYWtpbmcvbWFza2luZyB2aWEgcmV3cml0ZQogIHJld3JpdGUgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkgLy8gd2hldGhlciB0byByZXdyaXRlIHRoZSBsaW5rIG9yIG5vdAoKICAvLyBDdXN0b20gZGV2aWNlIHRhcmdldGluZwogIGlvcyAgICAgU3RyaW5nPyAvLyBjdXN0b20gbGluayBmb3IgaU9TIGRldmljZXMKICBhbmRyb2lkIFN0cmluZz8gLy8gY3VzdG9tIGxpbmsgZm9yIEFuZHJvaWQgZGV2aWNlcwogIGdlbyAgICAgSnNvbj8gLy8gY3VzdG9tIGxpbmsgZm9yIHNwZWNpZmljIGNvdW50cmllcwoKICAvLyBVc2VyIHdobyBjcmVhdGVkIHRoZSBsaW5rCiAgdXNlciAgIFVzZXI/ICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkIFN0cmluZz8KCiAgLy8gUHJvamVjdCB0aGF0IHRoZSBsaW5rIGJlbG9uZ3MgdG8KICAvLyBwcm9qZWN0ICAgICAgIFByb2plY3Q/IEByZWxhdGlvbihmaWVsZHM6IFtwcm9qZWN0SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogQ2FzY2FkZSwgb25EZWxldGU6IENhc2NhZGUpCiAgLy8gcHJvamVjdElkICAgICBTdHJpbmc/CiAgLy8gUmVsYXRpb25hbCByZWZlcmVuY2UgdG8gdGhlIHByb2plY3QgZG9tYWluCiAgLy8gcHJvamVjdERvbWFpbiBEb21haW4/ICBAcmVsYXRpb24oZmllbGRzOiBbZG9tYWluXSwgcmVmZXJlbmNlczogW3NsdWddLCBvblVwZGF0ZTogQ2FzY2FkZSwgb25EZWxldGU6IENhc2NhZGUpCgogIHB1YmxpY1N0YXRzICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKSAvLyB3aGV0aGVyIHRvIHNob3cgcHVibGljIHN0YXRzIG9yIG5vdAogIGNsaWNrcyAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApIC8vIG51bWJlciBvZiBjbGlja3MKICBsYXN0Q2xpY2tlZCAgIERhdGVUaW1lPyAvLyB3aGVuIHRoZSBsaW5rIHdhcyBsYXN0IGNsaWNrZWQKICBjaGVja0Rpc2FibGVkIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkgLy8gZGlzYWJsZSA0MDQgY2hlY2tpbmcKICBsYXN0Q2hlY2tlZCAgIERhdGVUaW1lPyAvLyB3aGVuIHRoZSBsaW5rIHdhcyBsYXN0IGNoZWNrZWQgZm9yIDQwNHMKICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgIERhdGVUaW1lICBAdXBkYXRlZEF0CgogIC8vIExpbmsgdGFncwogIC8vIHRhZyAgIFRhZz8gICAgQHJlbGF0aW9uKGZpZWxkczogW3RhZ0lkXSwgcmVmZXJlbmNlczogW2lkXSkKICAvLyB0YWdJZCBTdHJpbmc/CgogIC8vIENvbW1lbnRzIG9uIHRoZSBwYXJ0aWN1bGFyIHNob3J0bGluawogIGNvbW1lbnRzIFN0cmluZz8KICAvLyBAQGZ1bGx0ZXh0KFtrZXksIHVybF0pCgogIEBAdW5pcXVlKFtkb21haW4sIGtleV0pCiAgLy8gQEBpbmRleChwcm9qZWN0SWQpCiAgLy8gQEBpbmRleChkb21haW4pCiAgLy8gQEBpbmRleCh0YWdJZCkKICAvLyBAQGluZGV4KHByb3h5KQogIC8vIEBAaW5kZXgocGFzc3dvcmQpCiAgLy8gQEBpbmRleChjcmVhdGVkQXQoc29ydDogRGVzYykpCiAgLy8gQEBpbmRleChjbGlja3Moc29ydDogRGVzYykpCiAgLy8gQEBpbmRleChsYXN0Q2xpY2tlZCkKICAvLyBAQGluZGV4KGNoZWNrRGlzYWJsZWQpCiAgLy8gQEBpbmRleChsYXN0Q2hlY2tlZChzb3J0OiBBc2MpKQogIEBAaW5kZXgodXNlcklkKQp9Cg==",
  "inlineSchemaHash": "e05d21d9b95aeac148aa4fa5887141c56b0797157fbfe859c795510eb9fa670a",
  "noEngine": false
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

