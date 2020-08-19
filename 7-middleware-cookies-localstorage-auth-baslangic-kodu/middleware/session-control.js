export default function (context) {
    if (process.clint) {
        context.store.dispatch("initAuth");
    } else {
        context.store.dispatch("initAuth", context.req)
    }
}
