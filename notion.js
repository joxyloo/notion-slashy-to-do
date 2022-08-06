const { Client } = require("@notionhq/client")

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

exports.addToDo = async function(toDoItem, category, url) {

  var properties = {
    "Name": {
      "title": [
        {
          "text": {
            "content": toDoItem
          }
        }
      ]
    },
    "Database": {
      "select": {
        "name": "To-do"
      }
    },
    "Source": {
      "url": url
    }
  }

  if (category !== "") {
    properties['Category'] = {
      "multi_select": [
        {
          "name": category
        }
      ]
    }
  }

  return await notion.pages.create({
    "parent": {
      "type": "database_id",
      "database_id": process.env.NOTION_DB_ID
    },
    "properties": properties
  });
}