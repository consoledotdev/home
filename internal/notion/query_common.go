package notion

import (
	"log/slog"
	"time"
)

// lastThursday returns the date of the last Thursday.
// If today is Thursday, it returns today's date.
// If the twoWeeksAgo flag is true, it returns the Thursday from two weeks ago.
func lastThursday(twoWeeksAgo bool) time.Time {
	now := time.Now()

	// Calculate days since Thursday
	daysSinceThursday := (int(now.Weekday()) - int(time.Thursday) + 7) % 7
	slog.Debug("Days since Thursday", slog.Int("daysSinceThursday", daysSinceThursday))

	// Determine last Thursday (or today if it's Thursday)
	targetThursday := now.AddDate(0, 0, -daysSinceThursday)

	slog.Debug("Target Thursday", slog.Time("targetThursday", targetThursday))

	// Adjust for two weeks ago if the flag is set
	if twoWeeksAgo {
		targetThursday = targetThursday.AddDate(0, 0, -7)
	}

	return targetThursday
}

// nextThursday returns the date of the next Thursday
func nextThursday() time.Time {
	now := time.Now()

	// Calculate days until Thursday
	daysUntilThursday := (int(time.Thursday) - int(now.Weekday()) + 7) % 7
	slog.Debug("Days until Thursday", slog.Int("daysUntilThursday", daysUntilThursday))

	// Determine next Thursday
	targetThursday := now.AddDate(0, 0, daysUntilThursday)

	slog.Debug("Target Thursday", slog.Time("targetThursday", targetThursday))

	return targetThursday
}
