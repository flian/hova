# hova
hibernate entity object view admin

Just try following things:

dependce just hibernate entity class/xml

hova need do:

1. list all entity type
2. once select one entity class, can auto list all entity objects
3. can create a new/modify entity object, modify its literal properties.
4. can choose many2one/one2one related entity object
5. can add related entity object to one2many list/set/map
6. can search by entity propeties with auto reminder selector
  e.g.  
  entity User{int:id,string:name,int age,User:wife,Address:home,Address[]: addresses}
  entiy  Address{String country,String address}

 while user try to search a User, first user can selector properties.＜/br＞
 for example customer select user, then next select box will popup {id,name,age,wife}＜/br＞
  a. choose id, as id is inteter, next select box will popup {>,<,= etc}＜/br＞
  b. choose name, as name is String, next select box will popup {contains,start with,is,not,endwith etc}＜/br＞
  b. choose wife, as wife is another entity, next select box will popup another {User} search.＜/br＞
  d. choose home, as home is another entity, next select box will popup {Adress} search＜/br＞



