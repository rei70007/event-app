
<script>
    import favicon from '$lib/assets/favicon.svg';
    import '../app.css';
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer>
    <div>
        <h2>Contact</h2>
        <a href="mailto:reiali19@htl-shkoder.com">Write a mail</a>
    </div>
    <div>
        <h2>Admin</h2>
        <a href="/admin">Go to admin area</a>
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-evenly;
        padding: 30px;
        background: #1f2937;
        color: white;
        margin-top: 40px;
    }

    h2 { margin-bottom: 8px; font-size: 1rem; color: #9ca3af; }

    a { color: #60a5fa; text-decoration: none; }
    a:hover { text-decoration: underline; }
</style>
