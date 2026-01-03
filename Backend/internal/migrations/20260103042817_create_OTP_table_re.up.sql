create table otp_verification(
    id serial primary key,
    email text not null,
    otp_hash text not null,
    expires_at timestamptz not null,
    is_used boolean not null default false,
    created_at timestamptz not null default now()
);