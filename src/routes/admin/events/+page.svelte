
<script>
    let {data} = $props();
    console.log(data.events)
</script>

<h1>Manage my Events</h1>
<a href="/admin/event/new">
    <button>Add new event</button>
</a>

<main>
    {#each data.events as event}
        <div class="event">
            <div>
                <p class="name">{event.name}</p>
                <p class="category">{event.category_name}</p>
            </div>
            <div class="actions">
                <a href="/admin/event/{event.id}/edit">
                    <button>Edit</button>
                </a>
                <form action="?/delete" method="POST">
                    <input type="hidden" value={event.id} name="id">
                    <button type="submit" class="delete">Delete</button>
                </form>
            </div>
        </div>
    {/each}
</main>

<style>
    h1 { margin-bottom: 16px; }

    main {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
    }

    .event {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        background: white;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .name { margin: 0; font-weight: 600; }

    .category { margin: 4px 0 0; font-size: 0.85rem; color: #6b7280; }

    .actions { display: flex; gap: 8px; align-items: center; }

    form { display: inline; }

    button {
        padding: 6px 14px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        background: #2563eb;
        color: white;
    }

    button:hover { opacity: 0.85; }

    .delete { background: #ef4444; }
</style>
