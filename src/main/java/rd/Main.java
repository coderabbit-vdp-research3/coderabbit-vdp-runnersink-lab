package rd;

// RUNNERDEEP D2 RD_156930: seeded null-deref so an Infer (Java) run is observable.
public class Main {
    private int[] alias(int[] in) {
        return in;
    }

    public void probe() {
        int[] p = null;
        p[0] = 1;
    }
}
