# MicroProjext-Login2Xplore

## Project Management Form

### Description

The Project Management Form consists of 5 fields :
Project-Id, Project-Name,  Assigned-To,  Assignment Date &  Deadline and 
3 buttons :
Save, Update & Reset.
This form interacts with JsonPowerDB .

The three control buttons Save, Update and Reset will be at the bottom of the form. On page load or any control button click, an empty form will be displayed and the cursor will remain at the first input field [Project-Id] in the form which will have the primary key in the relation. All other fields and buttons will be disabled at this time.

User will enter data in the field having primary key and

#### Create Record 
If the primary key value does NOT exist in the database, enable Save and Reset buttons and move the cursor to the next field and allow the user to enter data in the form : 

    The data should be validated i.e. no empty fields.

    Complete the data entry form and click the Save button to store the data in the database and the form will be reset.

#### Update Record
If the primary key value is present in the database, display that data in the form. Enable Update and Reset buttons and move the cursor to the next' field in the form. The primary key field will be kept disabled and allow users to change other form fields.

    The data should be validated i.e. no empty fields.

    Clicking on Update button will update the data in the database and the form will be reset.

#### Reset Form
Clicking on Reset button will reset the form.

#### About JsonPowerDB:
JsonPowerDB is a Real-time, High Performance, Lightweight and Simple to Use, Rest API based Multi-mode DBMS. JsonPowerDB has ready to use API for Json document DB, RDBMS, Key-value DB, GeoSpatial DB and Time Series DB functionality. JPDB supports and advocates for true serverless and pluggable API development.

### Benefits of using JsonPowerDB
    Simplest way to retrieve data in a JSON format.
    Schema-free, Simple to use, Nimble and In-Memory database.
    It is built on top of one of the fastest and real-time data indexing engine - PowerIndeX.
    It is low level (raw) form of data and is also human readable.
    It helps developers in faster coding, in-turn reduces development cost.
