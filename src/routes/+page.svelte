
<script>
    let {data} = $props()
</script>

<h1>Events in Shkodra</h1>

<main>
    {#each data.events as event}
        <a href={"/event/" + event.id} class="card">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
        </a>
    {/each}
</main>

<style>
    h1 { margin-bottom: 20px; }

    main {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .card {
        display: block;
        padding: 16px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        text-decoration: none;
        color: inherit;
        background: white;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        transition: box-shadow 0.2s;
    }

    .card:hover { box-shadow: 0 4px 10px rgba(0,0,0,0.1); }

    h2 { margin: 0 0 6px; font-size: 1.2rem; color: #1f2937; }

    p { margin: 0; color: #6b7280; font-size: 0.95rem; }
</style>
