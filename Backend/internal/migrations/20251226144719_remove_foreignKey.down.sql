drop index if exists idx_location_owner;

alter table locations
rename column owner_id to user_id;

alter table locations
add constraint fk_locations_user
foreign key (user_id)
references users(id)
on delete cascade;