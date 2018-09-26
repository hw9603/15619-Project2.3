# Please make sure to set up this alarm before running task3
resource "aws_cloudwatch_metric_alarm" "detect_label" {
  alarm_name                        = "DetectLabelCount1K"
  comparison_operator        = "GreaterThanOrEqualToThreshold"
  evaluation_periods            = "1"
  metric_name                      = "DetectedLabelCount"
  namespace                         = "AWS/Rekognition"
  period                                 = "300"
  statistic                              = "Sum"
  threshold                           = "10000"
  alarm_description             = "This metric monitors DetectedLabel API calls to Rekognition, 1000 per hour"
  insufficient_data_actions = []
}
