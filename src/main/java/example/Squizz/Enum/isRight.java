package example.Squizz.Enum;

public enum isRight {
    wrong(0),
    correct(1);

    private int value;

    private isRight(int value) {
        this.value = value;
    }
}
