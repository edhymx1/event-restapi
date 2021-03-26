SELECT g.name, g.last_name FROM g
    JOIN guest_event ge ON g.guest_id = ge.guest_id
    JOIN event_uc e ON ge.guest_id = e.guest_id
    WHERE e.evet_uc_id = ?;