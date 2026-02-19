
<script>
    let {data} = $props();
</script>

<h1>Manage my categories</h1>
<a href="/admin/category/new">
    <button>Add Category</button> 
</a>

<main>
    {#each data.categories as category}
        <div class="category">
            <p>{category.name}</p>
            <div class="actions">
                <a href="/admin/category/{category.id}/edit">
                    <button>Edit</button>
                </a>
                <form action="?/delete" method="POST">
                    <input type="hidden" value={category.id} name="id">
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

    .category {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        background: white;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .category p { margin: 0; font-weight: 600; }

    .actions { display: flex; gap: 8px; }

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

    form { display: inline; }
</style>