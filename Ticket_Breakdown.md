# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1:

- Title: "Add custom agent ID field to `Facilities` database"
- Description: "We need to add a new field to the database to store the custom agent ID for each agent in a facility. This field should be optional and allow facilities to specify their own unique ID for each agent."
Acceptance criteria:
The database has a new custom_agent_id field that can be used to store the custom agent ID for each agent.
The custom_agent_id field is optional and can be left blank if no custom ID has been specified. (Assumption)
The custom_agent_id field is properly indexed and optimized for fast queries.
- Time/effort estimate: 1 day
- Implementation details:
Use a database migration tool to add the custom_agent_id field to the agents table.
Set the custom_agent_id field to be nullable and allow it to accept any alphanumeric string up to 255 characters in length. (Assumption)
Create a unique index on the custom_agent_id field to ensure that no two agents have the same custom ID.


### Ticket 2:

- Title: "Update report generation to use custom agent ID"
- Description: "We need to update the report generation logic to use the custom agent ID if it is available, and fall back to the internal database ID if no custom ID has been specified. This will ensure that reports generated for facilities use the correct ID for each agent."
- Time/effort estimate: 1 day
- Acceptance criteria:
The report generation logic correctly uses the custom agent ID if it is available, and falls back to the internal database ID if no custom ID has been specified.
The report templates are updated to display the correct ID for each agent, either the custom ID or the internal database ID as needed.

### Ticket 3:

- Title: "Add custom agent ID field to UI"
- Description: "We need to add a new field to the user interface to allow facilities to enter the custom agent ID for each agent. This field should be optional and allow facilities to specify their own unique ID for each agent."
- Acceptance criteria:
The user interface has a new Custom ID field that can be used to enter the custom agent ID for each agent.
The Custom ID field is optional and can be left blank if no custom ID has been specified.
The Custom ID field is properly validated to ensure that it only accepts alphanumeric strings up to 255 characters in length.
Changes to the Custom ID field are properly saved to the database.
- Time/effort estimate: 1 day
- Implementation details:
Add a new Custom ID field to the form preferably used by facilities admin in the user interface.
Use JavaScript validation to ensure that the Custom ID field only accepts alphanumeric strings .
