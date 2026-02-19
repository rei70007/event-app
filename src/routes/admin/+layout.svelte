
<script>
    let { children } = $props();
</script>

<header>
    <h1>Admin Dashboard</h1>
</header>

{@render children()}

<style>
    header {
        background: #1f2937;
        color: white;
        padding: 16px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }

    h1 { margin: 0; font-size: 1.4rem; }

    nav { display: flex; gap: 16px; }

    nav a {
        color: #d1d5db;
        text-decoration: none;
        font-weight: 600;
    }

    nav a:hover { color: white; }
</style>
