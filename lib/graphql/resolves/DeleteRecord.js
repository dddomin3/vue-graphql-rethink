export default function DeleteRecord (obj, args, source, info) {
  let { cursor, config } = this.globals.getDBConfig(this, info)
  let table = cursor.db(config.db).table(config.table)
  let primaryKeyName = 'id'
  if (config.hasOwnProperty('options')) {
    primaryKeyName = config.options.primaryKey || 'id'
  }
  return table.get(args[primaryKeyName]).delete().run().then(function () {
    return 200
  }).catch(function (err) {
    return 500
  })
}
