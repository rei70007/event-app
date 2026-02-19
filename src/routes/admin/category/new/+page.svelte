
<h1>New Category</h1>

<form method="POST" action="?/create">
    <label for="name">Category name</label>
    <input type="text" id="name" name="name" required>

    <button type="submit">Create Category</button>
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

    input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    input:focus { outline: none; border-color: #2563eb; }

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
