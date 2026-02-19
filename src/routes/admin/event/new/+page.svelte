
<script>
    let {data} = $props();
</script>

<h1>New Event</h1>

<form method="POST" action="?/create">
    <label for="name">Event name</label>
    <input type="text" name="name" id="name" required>

    <label for="description">Event description</label>
    <textarea name="description" id="description"></textarea>

    <label for="startdate">Start date</label>
    <input type="date" id="startdate" name="startdate">

    <label for="starttime">Start time</label>
    <input type="time" id="starttime" name="starttime">

    <label for="category">Category</label>
    <select name="category" id="category">
        {#each data.categories as category}
            <option value={category.id}>{category.name}</option>
        {/each}
    </select>

    <button type="submit">Create</button>
</form>

<style>
    h1 { margin-bottom: 20px; }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 480px;
    }

    label { font-weight: 600; color: #374151; }

    input, textarea, select {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    input:focus, textarea:focus, select:focus { outline: none; border-color: #2563eb; }

    textarea { height: 100px; resize: vertical; }

    button {
        background: #2563eb;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
    }

    button:hover { background: #1d4ed8; }
</style>
