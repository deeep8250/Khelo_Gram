
alter table clubs
add column location_id integer;


alter table clubs 
add constraint fk_users_club_locations
foreign key (location_id)
references locations(id)
on delete cascade;
