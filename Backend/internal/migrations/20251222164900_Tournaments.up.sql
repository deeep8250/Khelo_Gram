create table
    tournaments (
        id serial primary key,
        club_id integer not null,
        cover_image text not null,
        tournament_name text not null,
        location_id integer not null,
        started_at timestamptz default now (),
        ended_at timestamptz not null,
        entry_fees integer not null,
        total_teams integer not null,
        members_per_team integer not null,
        age integer not null,
        first_prize integer not null,
        second_prize integer not null,
        third_prize integer not null,
        other_prizes text not null,
        rules text not null,
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        deleted_at timestamptz,
        is_deleted boolean not null default false,
        is_ended boolean not null default false,

        constraint fk_org_tournaments
        foreign key (club_id)
        references clubs(id)
        on delete cascade ,

        constraint fk_users_tournament_locations
        foreign key (location_id)
        references locations(id)
        on delete cascade
                
    );