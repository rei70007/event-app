
<script>
    let {data} = $props();
</script>

<h1>Edit Event</h1>

<form action="?/edit" method="POST">
    <label for="name">Event name</label>
    <input type="text" name="name" id="name" required value={data.event.name}>

    <label for="description">Event description</label>
    <textarea name="description" id="description" required>{data.event.description}</textarea>

    <label for="startdate">Start date</label>
    <input type="date" id="startdate" name="startdate" required value={data.event.startdate.toISOString().substring(0,10)}>

    <label for="starttime">Start time</label>
    <input type="time" id="starttime" name="starttime" required value={data.event.starttime}>

    <button type="submit">Update</button>
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

    input, textarea {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    input:focus, textarea:focus { outline: none; border-color: #2563eb; }

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