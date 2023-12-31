//
// Code generated by go-jet DO NOT EDIT.
//
// WARNING: Changes to this file may cause incorrect behavior
// and will be lost if the code is regenerated
//

package table

import (
	"github.com/go-jet/jet/v2/postgres"
)

var Bots = newBotsTable("public", "bots", "")

type botsTable struct {
	postgres.Table

	// Columns
	ID          postgres.ColumnString
	OwnerID     postgres.ColumnString
	Name        postgres.ColumnString
	Description postgres.ColumnString
	AvatarURL   postgres.ColumnString
	Personality postgres.ColumnString
	CreatedAt   postgres.ColumnTimestamp

	AllColumns     postgres.ColumnList
	MutableColumns postgres.ColumnList
}

type BotsTable struct {
	botsTable

	EXCLUDED botsTable
}

// AS creates new BotsTable with assigned alias
func (a BotsTable) AS(alias string) *BotsTable {
	return newBotsTable(a.SchemaName(), a.TableName(), alias)
}

// Schema creates new BotsTable with assigned schema name
func (a BotsTable) FromSchema(schemaName string) *BotsTable {
	return newBotsTable(schemaName, a.TableName(), a.Alias())
}

// WithPrefix creates new BotsTable with assigned table prefix
func (a BotsTable) WithPrefix(prefix string) *BotsTable {
	return newBotsTable(a.SchemaName(), prefix+a.TableName(), a.TableName())
}

// WithSuffix creates new BotsTable with assigned table suffix
func (a BotsTable) WithSuffix(suffix string) *BotsTable {
	return newBotsTable(a.SchemaName(), a.TableName()+suffix, a.TableName())
}

func newBotsTable(schemaName, tableName, alias string) *BotsTable {
	return &BotsTable{
		botsTable: newBotsTableImpl(schemaName, tableName, alias),
		EXCLUDED:  newBotsTableImpl("", "excluded", ""),
	}
}

func newBotsTableImpl(schemaName, tableName, alias string) botsTable {
	var (
		IDColumn          = postgres.StringColumn("id")
		OwnerIDColumn     = postgres.StringColumn("owner_id")
		NameColumn        = postgres.StringColumn("name")
		DescriptionColumn = postgres.StringColumn("description")
		AvatarURLColumn   = postgres.StringColumn("avatar_url")
		PersonalityColumn = postgres.StringColumn("personality")
		CreatedAtColumn   = postgres.TimestampColumn("created_at")
		allColumns        = postgres.ColumnList{IDColumn, OwnerIDColumn, NameColumn, DescriptionColumn, AvatarURLColumn, PersonalityColumn, CreatedAtColumn}
		mutableColumns    = postgres.ColumnList{OwnerIDColumn, NameColumn, DescriptionColumn, AvatarURLColumn, PersonalityColumn, CreatedAtColumn}
	)

	return botsTable{
		Table: postgres.NewTable(schemaName, tableName, alias, allColumns...),

		//Columns
		ID:          IDColumn,
		OwnerID:     OwnerIDColumn,
		Name:        NameColumn,
		Description: DescriptionColumn,
		AvatarURL:   AvatarURLColumn,
		Personality: PersonalityColumn,
		CreatedAt:   CreatedAtColumn,

		AllColumns:     allColumns,
		MutableColumns: mutableColumns,
	}
}
