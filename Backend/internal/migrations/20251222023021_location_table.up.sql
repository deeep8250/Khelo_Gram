CREATE TABLE locations (

id serial primary key,
user_id integer not null,
pin varchar(6) not null,
state text  not null default 'west-bengal',
city text not null default 'kolkata',
village text not null ,
owner_type text not null ,
updated_at  timestamptz not null default now(),
created_at timestamptz not null default now() ,

constraint fk_locations_user
foreign key (user_id)
references users(id)
on delete cascade

);