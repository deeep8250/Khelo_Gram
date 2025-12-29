alter table clubs
drop constraint if exists fk_users_club_locations; 

alter table clubs
drop column if exists location_id;