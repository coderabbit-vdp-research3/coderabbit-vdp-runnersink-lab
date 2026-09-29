/* RUNNERDEEP RD_156930: seed bugs so an Infer run is observable in-band
 * (NULL_DEREFERENCE + MEMORY_LEAK), plus a compile-DB command beacon. */
#include <stdlib.h>

int *rd_deref(int *ptr) {
    return ptr;
}

void rd_infer_probe(void) {
    int *q = rd_deref(0);
    *q = 42;                 /* NULL_DEREFERENCE candidate */
    char *buf = malloc(16);  /* MEMORY_LEAK candidate */
    buf[0] = 1;
}

/* runnerdeep D2 touch */
