## Critics

The `critics` table represents movie critics who have created reviews for movies. Each critic has the following fields:

- `critic_id`: (Primary Key) A unique ID for the critic.
- `preferred_name`: (String) The critic's preferred first name.
- `surname`: (String) The critic's last name.
- `organization_name`: (String) The name of the organization the critic works for.

An example record looks like the following:

```json
{
  "critic_id": 1,
  "preferred_name": "Chana",
  "surname": "Gibson",
  "organization_name": "Film Frenzy"
}
```
