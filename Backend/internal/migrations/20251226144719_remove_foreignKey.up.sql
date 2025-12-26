alter table locations
drop constraint if exists fk_locations_user;

alter table locations 
rename user_id to owner_id;

create index if not exists idx_location_owner
on locations(owner_id,owner_type);