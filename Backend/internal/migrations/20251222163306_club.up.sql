create table clubs(
id serial primary key,
user_id integer not null,
org_name text not null,
aadhar_nb varchar(12) not null,
published_at timestamptz default now(),
is_verified boolean not null default false,
location_id integer not null ,
about text not null,
profile_img text not null,

constraint fk_users_club
foreign key (user_id)
references users(id)
on delete cascade ,

constraint fk_users_club_locations
foreign key (location_id)
references locations(id)
on delete cascade
);