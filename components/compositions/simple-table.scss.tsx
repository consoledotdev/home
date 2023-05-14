import css from "styled-jsx/css";
export default css.global`
    .simple-table {
        position: relative;
        padding: 0;
        margin: calc(var(--space4_5) + var(--space2)) 0 calc(var(--space5) + var(--space3));
        padding: 0;
        overflow-x: auto;
        transition: var(--a-micro);
        box-shadow: inset 1px 0 0 0px transparent, inset -1px 0 0 0px transparent;
    }

    .simple-table-grid {
        display: grid;
        grid-auto-flow: row;
        grid-auto-columns: 1fr;
    }

    .simple-table-grid .row {
        position: relative;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
    }

    .simple-table-grid .row.header {
        font-weight: 500;
    }

    .simple-table-grid .cell {
        font-size: var(--t-size-2);
        font-style: italic;
        color: var(--theme-text-1);
        line-height: var(--t-lH4);
        padding: var(--space2) calc(var(--space2) + var(--space3));
        word-break: break-word;
    }

    .simple-table-grid .cell:first-child {
        padding-left: var(--space2);
    }

    .simple-table-grid .cell:last-child {
        padding-right: var(--space2);
    }

    .simple-table-grid .row:not(:last-child) .cell {
        border-bottom: var(--theme-border-2);
    }

    .simple-table-grid .row-header .cell {
        border-bottom: var(--theme-border-3);
    }

    .simple-table-grid .cell.fixed {
        z-index: 10;
        position: -webkit-sticky;
        position: sticky;
    }

    .marked-scrollable-h.is-scrolled .simple-table-grid .cell.fixed.left.last {
        box-shadow: 1px 0 0 var(--theme-border-4-color);
    }

    .marked-scrollable-h:not(.is-fully-scrolled) .simple-table-grid .cell.fixed.right.last {
        box-shadow: -1px 0 0 var(--theme-border-4-color);
    }

    .simple-table-grid .cell .link {
        margin-right: var(--space3);
    }

    .simple-table-grid .cell > .icon {
        width: var(--t-size0);
        height: var(--t-size0);
    }

    .simple-table-grid .cell-header {
        font-weight: 500;
        border-bottom: var(--theme-border-3);
        padding-bottom: var(--space2);
        margin-bottom: var(--space1);
    }

    .simple-table-grid .cell-meta {
        color: var(--theme-text-4);
    }

    @media (max-width: 600px) {
    }
`;
